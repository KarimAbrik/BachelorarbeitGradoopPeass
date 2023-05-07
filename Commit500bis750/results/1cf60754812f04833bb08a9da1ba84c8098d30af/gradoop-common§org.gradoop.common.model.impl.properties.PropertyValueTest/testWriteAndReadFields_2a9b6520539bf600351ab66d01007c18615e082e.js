if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 1cf60754812f04833bb08a9da1ba84c8098d30af -test org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields\")'>1cf60754812f04833bb08a9da1ba84c8098d30af</a><br>Test Case: org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields<br>";
}

var source = {"current":
{
 "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDateTime_LocalDateTime":
 `/**
 * Serializes a {@code LocalDateTime} value.
 *
 * @param dateTime {@code LocalDateTime} value
 *
 * @return serialized value
 */
public static byte[] serializeDateTime(LocalDateTime dateTime) {
    int year = dateTime.getYear();
    int month = dateTime.getMonth().getValue();
    int day = dateTime.getDayOfMonth();
    int hour = dateTime.getHour();
    int minute = dateTime.getMinute();
    int second = dateTime.getSecond();
    int nano = dateTime.getNano();
    return serialize(new int[] { year, month, day, hour, minute, second, nano });
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setInt_int":
 `/**
 * Sets the wrapped value as {@code int} value.
 *
 * @param intValue intValue
 */
public void setInt(int intValue) {
    rawBytes = new byte[OFFSET + Bytes.SIZEOF_INT];
    rawBytes[0] = TYPE_INTEGER;
    Bytes.putInt(rawBytes, OFFSET, intValue);
}`,"org.gradoop.common.model.impl.properties.PropertyValueTest.testWriteAndReadFields_":
 `@Test
public void testWriteAndReadFields() throws IOException {
    PropertyValue p = create(NULL_VAL_0);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(BOOL_VAL_1);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(INT_VAL_2);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(LONG_VAL_3);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(FLOAT_VAL_4);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(DOUBLE_VAL_5);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(STRING_VAL_6);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(BIG_DECIMAL_VAL_7);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(GRADOOP_ID_VAL_8);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(MAP_VAL_9);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(LIST_VAL_a);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(DATE_VAL_b);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(TIME_VAL_c);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
    p = create(DATETIME_VAL_d);
    assertEquals(p, writeAndReadFields(PropertyValue.class, p));
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setDouble_double":
 `/**
 * Sets the wrapped value as {@code double} value.
 *
 * @param doubleValue value
 */
public void setDouble(double doubleValue) {
    rawBytes = new byte[OFFSET + Bytes.SIZEOF_DOUBLE];
    rawBytes[0] = TYPE_DOUBLE;
    Bytes.putDouble(rawBytes, OFFSET, doubleValue);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setTime_LocalTime":
 `/**
 * Sets the wrapped value as {@code LocalTime} value.
 *
 * @param time value
 */
public void setTime(LocalTime time) {
    byte[] valueBytes = DateTimeSerializer.serializeTime(time);
    rawBytes = new byte[OFFSET + DateTimeSerializer.SIZEOF_TIME];
    rawBytes[0] = TYPE_TIME;
    Bytes.putBytes(rawBytes, OFFSET, valueBytes, 0, valueBytes.length);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setObject_Object":
 `//----------------------------------------------------------------------------
// Setter
//----------------------------------------------------------------------------
/**
 * Sets the given value as internal value if it has a supported type.
 *
 * @param value value
 * @throws UnsupportedTypeException
 */
public void setObject(Object value) {
    if (value == null) {
        rawBytes = new byte[] { TYPE_NULL };
        validateBytesLength();
    } else if (value instanceof Boolean) {
        setBoolean((Boolean) value);
    } else if (value instanceof Integer) {
        setInt((Integer) value);
    } else if (value instanceof Long) {
        setLong((Long) value);
    } else if (value instanceof Float) {
        setFloat((Float) value);
    } else if (value instanceof Double) {
        setDouble((Double) value);
    } else if (value instanceof String) {
        setString((String) value);
    } else if (value instanceof BigDecimal) {
        setBigDecimal((BigDecimal) value);
    } else if (value instanceof GradoopId) {
        setGradoopId((GradoopId) value);
    } else if (value instanceof Map) {
        setMap((Map) value);
    } else if (value instanceof List) {
        setList((List) value);
    } else if (value instanceof LocalDate) {
        setDate((LocalDate) value);
    } else if (value instanceof LocalTime) {
        setTime((LocalTime) value);
    } else if (value instanceof LocalDateTime) {
        setDateTime((LocalDateTime) value);
    } else {
        throw new UnsupportedTypeException(value.getClass());
    }
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setBigDecimal_BigDecimal":
 `/**
 * Sets the wrapped value as {@code BigDecimal} value.
 *
 * @param bigDecimalValue value
 */
public void setBigDecimal(BigDecimal bigDecimalValue) {
    byte[] valueBytes = Bytes.toBytes(bigDecimalValue);
    rawBytes = new byte[OFFSET + valueBytes.length];
    rawBytes[0] = TYPE_BIG_DECIMAL;
    Bytes.putBytes(rawBytes, OFFSET, valueBytes, 0, valueBytes.length);
    validateBytesLength();
}`,"org.gradoop.common.model.impl.properties.PropertyValue.byteSize_":
 `/**
 * Returns the byte size of the properties internal representation
 * @return byte size
 */
public int byteSize() {
    return rawBytes.length;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setBoolean_boolean":
 `/**
 * Sets the wrapped value as {@code boolean} value.
 *
 * @param booleanValue value
 */
public void setBoolean(boolean booleanValue) {
    rawBytes = new byte[OFFSET + Bytes.SIZEOF_BOOLEAN];
    rawBytes[0] = TYPE_BOOLEAN;
    Bytes.putByte(rawBytes, OFFSET, (byte) (booleanValue ? -1 : 0));
}`,"org.gradoop.common.GradoopTestUtils.writeAndReadFields_Class_T":
 `public static <T extends Value> T writeAndReadFields(Class<T> clazz, T in) throws IOException {
    // write to byte[]
    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    DataOutputView outputView = new DataOutputViewStreamWrapper(outputStream);
    in.write(outputView);
    outputStream.flush();
    T out;
    try {
        out = clazz.newInstance();
    } catch (Exception e) {
        e.printStackTrace();
        throw new IOException("Cannot initialize the class: " + clazz);
    }
    // read from byte[]
    ByteArrayInputStream inputStream = new ByteArrayInputStream(outputStream.toByteArray());
    DataInputView inputView = new DataInputViewStreamWrapper(inputStream);
    out.read(inputView);
    return out;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setLong_long":
 `/**
 * Sets the wrapped value as {@code long} value.
 *
 * @param longValue value
 */
public void setLong(long longValue) {
    rawBytes = new byte[OFFSET + Bytes.SIZEOF_LONG];
    rawBytes[0] = TYPE_LONG;
    Bytes.putLong(rawBytes, OFFSET, longValue);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setDateTime_LocalDateTime":
 `/**
 * Sets the wrapped value as {@code LocalDateTime} value.
 *
 * @param dateTime value
 */
public void setDateTime(LocalDateTime dateTime) {
    byte[] valueBytes = DateTimeSerializer.serializeDateTime(dateTime);
    rawBytes = new byte[OFFSET + DateTimeSerializer.SIZEOF_DATETIME];
    rawBytes[0] = TYPE_DATETIME;
    Bytes.putBytes(rawBytes, OFFSET, valueBytes, 0, valueBytes.length);
}`,"org.gradoop.common.model.impl.id.GradoopId.<init>_ObjectId":
 `/**
 * Create GradoopId from existing ObjectId.
 *
 * @param objectId ObjectId
 */
GradoopId(ObjectId objectId) {
    this.bytes = objectId.toByteArray();
}`,"org.gradoop.common.model.impl.comparators.EPGMIdentifiableComparator.<init>_":
 ``,"org.gradoop.common.model.impl.properties.PropertyValue.equals_Object":
 `@Override
public boolean equals(Object o) {
    if (this == o) {
        return true;
    }
    if (!(o instanceof PropertyValue)) {
        return false;
    }
    PropertyValue that = (PropertyValue) o;
    return Arrays.equals(rawBytes, that.rawBytes);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.<init>_Object":
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
}`,"org.gradoop.common.model.impl.id.GradoopId.get_":
 `/**
 * Returns a new GradoopId
 *
 * @return new GradoopId
 */
public static GradoopId get() {
    return new GradoopId(new ObjectId());
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
 * for fixed length types (e.g. int, long, float, ...)
 * byte 2 - end : value bytes
 *
 * @param outputView data output to write data to
 * @throws IOException
 */
@Override
public void write(DataOutputView outputView) throws IOException {
    // null?
    // type
    outputView.writeByte(rawBytes[0]);
    // dynamic type?
    if (rawBytes[0] == TYPE_STRING || rawBytes[0] == TYPE_BIG_DECIMAL || rawBytes[0] == TYPE_MAP || rawBytes[0] == TYPE_LIST) {
        // write length
        outputView.writeShort(rawBytes.length - OFFSET);
    }
    // write data
    outputView.write(rawBytes, OFFSET, rawBytes.length - OFFSET);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setDate_LocalDate":
 `/**
 * Sets the wrapped value as {@code LocalDate} value.
 *
 * @param date value
 */
public void setDate(LocalDate date) {
    byte[] valueBytes = DateTimeSerializer.serializeDate(date);
    rawBytes = new byte[OFFSET + DateTimeSerializer.SIZEOF_DATE];
    rawBytes[0] = TYPE_DATE;
    Bytes.putBytes(rawBytes, OFFSET, valueBytes, 0, valueBytes.length);
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeTime_LocalTime":
 `/**
 * Serializes a {@code LocalTime} value.
 *
 * @param time {@code LocalTime} value
 *
 * @return serialized value
 */
public static byte[] serializeTime(LocalTime time) {
    int hour = time.getHour();
    int minute = time.getMinute();
    int second = time.getSecond();
    int nano = time.getNano();
    return serialize(new int[] { hour, minute, second, nano });
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setGradoopId_GradoopId":
 `/**
 * Sets the wrapped value as {@code GradoopId} value.
 *
 * @param gradoopIdValue value
 */
public void setGradoopId(GradoopId gradoopIdValue) {
    byte[] valueBytes = gradoopIdValue.toByteArray();
    rawBytes = new byte[OFFSET + GradoopId.ID_SIZE];
    rawBytes[0] = TYPE_GRADOOP_ID;
    Bytes.putBytes(rawBytes, OFFSET, valueBytes, 0, valueBytes.length);
}`,"org.gradoop.common.model.impl.id.GradoopId.toByteArray_":
 `/**
 * Returns byte representation of a GradoopId
 *
 * @return Byte representation
 */
@SuppressWarnings(value = "EI_EXPOSE_REP", justification = "never mutated")
public byte[] toByteArray() {
    return bytes;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength_":
 `/**
 * Throw a runtime exception if this property value can't be represented
 * in {@link PropertyValue#MAX_BINARY_LENGTH} bytes.
 */
private void validateBytesLength() {
    if (rawBytes != null && rawBytes.length > MAX_BINARY_LENGTH) {
        throw new IllegalStateException("The binary representation of this property is too big: " + rawBytes.length + " > " + MAX_BINARY_LENGTH);
    }
}`,"org.gradoop.common.model.impl.properties.PropertyValue.<init>_":
 `/**
 * Default constructor.
 */
public PropertyValue() {
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setFloat_float":
 `/**
 * Sets the wrapped value as {@code float} value.
 *
 * @param floatValue value
 */
public void setFloat(float floatValue) {
    rawBytes = new byte[OFFSET + Bytes.SIZEOF_FLOAT];
    rawBytes[0] = TYPE_FLOAT;
    Bytes.putFloat(rawBytes, OFFSET, floatValue);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.hashCode_":
 `@Override
public int hashCode() {
    return Arrays.hashCode(rawBytes);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setMap_Map":
 `/**
 * Sets the wrapped value as {@code Map} value.
 *
 * @param map value
 */
public void setMap(Map<PropertyValue, PropertyValue> map) {
    int size = map.keySet().stream().mapToInt(PropertyValue::byteSize).sum() + map.values().stream().mapToInt(PropertyValue::byteSize).sum() + OFFSET;
    ByteArrayOutputStream byteStream = new ByteArrayOutputStream(size);
    DataOutputStream outputStream = new DataOutputStream(byteStream);
    DataOutputView outputView = new DataOutputViewStreamWrapper(outputStream);
    try {
        outputStream.write(TYPE_MAP);
        for (Map.Entry<PropertyValue, PropertyValue> entry : map.entrySet()) {
            entry.getKey().write(outputView);
            entry.getValue().write(outputView);
        }
    } catch (IOException e) {
        throw new RuntimeException("Error writing PropertyValue");
    }
    this.rawBytes = byteStream.toByteArray();
    validateBytesLength();
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setList_List":
 `/**
 * Sets the wrapped value as {@code List} value.
 *
 * @param list value
 */
public void setList(List<PropertyValue> list) {
    int size = list.stream().mapToInt(PropertyValue::byteSize).sum() + OFFSET;
    ByteArrayOutputStream byteStream = new ByteArrayOutputStream(size);
    DataOutputStream outputStream = new DataOutputStream(byteStream);
    DataOutputView outputView = new DataOutputViewStreamWrapper(outputStream);
    try {
        outputStream.write(TYPE_LIST);
        for (PropertyValue entry : list) {
            entry.write(outputView);
        }
    } catch (IOException e) {
        throw new RuntimeException("Error writing PropertyValue");
    }
    this.rawBytes = byteStream.toByteArray();
    validateBytesLength();
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]":
 `/**
 * Generalization of serialization methods.
 *
 * @param ints int array representation of {@code LocalDate, LocalTime, LocalDateTime}
 *
 * @return serialized value
 */
private static byte[] serialize(int[] ints) {
    byte[] bytes = new byte[ints.length * SIZEOF_INT];
    for (int i = 0; i < ints.length; i++) {
        int offset = i * SIZEOF_INT;
        Bytes.putInt(bytes, offset, ints[i]);
    }
    return bytes;
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDate_LocalDate":
 `/**
 * Serializes a {@code LocalDate} value.
 *
 * @param date {@code LocalDate} value
 *
 * @return serialized value
 */
public static byte[] serializeDate(LocalDate date) {
    int year = date.getYear();
    int month = date.getMonth().getValue();
    int day = date.getDayOfMonth();
    return serialize(new int[] { year, month, day });
}`,"org.gradoop.common.model.impl.properties.PropertyValue.read_DataInputView":
 `@Override
public void read(DataInputView inputView) throws IOException {
    short length = 0;
    // type
    byte type = inputView.readByte();
    // dynamic type?
    if (type == TYPE_STRING || type == TYPE_BIG_DECIMAL || type == TYPE_MAP || type == TYPE_LIST) {
        // read length
        length = inputView.readShort();
    } else if (type == TYPE_NULL) {
        length = 0;
    } else if (type == TYPE_BOOLEAN) {
        length = Bytes.SIZEOF_BOOLEAN;
    } else if (type == TYPE_INTEGER) {
        length = Bytes.SIZEOF_INT;
    } else if (type == TYPE_LONG) {
        length = Bytes.SIZEOF_LONG;
    } else if (type == TYPE_FLOAT) {
        length = Bytes.SIZEOF_FLOAT;
    } else if (type == TYPE_DOUBLE) {
        length = Bytes.SIZEOF_DOUBLE;
    } else if (type == TYPE_GRADOOP_ID) {
        length = GradoopId.ID_SIZE;
    } else if (type == TYPE_DATE) {
        length = DateTimeSerializer.SIZEOF_DATE;
    } else if (type == TYPE_TIME) {
        length = DateTimeSerializer.SIZEOF_TIME;
    } else if (type == TYPE_DATETIME) {
        length = DateTimeSerializer.SIZEOF_DATETIME;
    }
    // init new array
    rawBytes = new byte[OFFSET + length];
    // read type info
    rawBytes[0] = type;
    // read data
    for (int i = OFFSET; i < rawBytes.length; i++) {
        rawBytes[i] = inputView.readByte();
    }
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setString_String":
 `/**
 * Sets the wrapped value as {@code String} value.
 *
 * @param stringValue value
 */
public void setString(String stringValue) {
    byte[] valueBytes = Bytes.toBytes(stringValue);
    rawBytes = new byte[OFFSET + valueBytes.length];
    rawBytes[0] = TYPE_STRING;
    Bytes.putBytes(rawBytes, OFFSET, valueBytes, 0, valueBytes.length);
    validateBytesLength();
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
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
  "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValueTest.testWriteAndReadFields()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-common",
  "name" : "model.impl.properties.PropertyValueTest#testWriteAndReadFields",
  "key" : "org.gradoop.common.model.impl.properties.PropertyValueTest.testWriteAndReadFields_",
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
    "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
    "kiekerPattern" : "new org.gradoop.common.model.impl.id.GradoopId.<init>(org.bson.types.ObjectId)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "model.impl.id.GradoopId#<init>",
    "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_ObjectId",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.id.GradoopId#get",
    "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.get()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "model.impl.id.GradoopId#get",
    "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
      "kiekerPattern" : "new org.gradoop.common.model.impl.id.GradoopId.<init>(org.bson.types.ObjectId)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "model.impl.id.GradoopId#<init>",
      "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_ObjectId",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.id.GradoopId#get",
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
    "call" : "org.gradoop.common.model.impl.comparators.EPGMIdentifiableComparator#<init>",
    "kiekerPattern" : "public new org.gradoop.common.model.impl.comparators.EPGMIdentifiableComparator.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "model.impl.comparators.EPGMIdentifiableComparator#<init>",
    "key" : "org.gradoop.common.model.impl.comparators.EPGMIdentifiableComparator.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.PropertyValue org.gradoop.common.model.impl.properties.PropertyValue.create(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "model.impl.properties.PropertyValue#create",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.create_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
      "kiekerPattern" : "private new org.gradoop.common.model.impl.properties.PropertyValue.<init>(java.lang.Object)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "model.impl.properties.PropertyValue#<init>",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_Object",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setObject(java.lang.Object)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "model.impl.properties.PropertyValue#setObject",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setObject_Object",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#validateBytesLength",
          "kiekerPattern" : "private void org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#validateBytesLength",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setString",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setString(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setString",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setString_String",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#validateBytesLength",
            "kiekerPattern" : "private void org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#validateBytesLength",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setString",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setBoolean",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setBoolean(boolean)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setBoolean",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setBoolean_boolean",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setInt",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setInt(int)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setInt",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setInt_int",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setLong",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setLong(long)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setLong",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setLong_long",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setFloat",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setFloat(float)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setFloat",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setFloat_float",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setDouble",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setDouble(double)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setDouble",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setDouble_double",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setBigDecimal",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setBigDecimal(java.math.BigDecimal)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setBigDecimal",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setBigDecimal_BigDecimal",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#validateBytesLength",
            "kiekerPattern" : "private void org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#validateBytesLength",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setBigDecimal",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setGradoopId",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setGradoopId(org.gradoop.common.model.impl.id.GradoopId)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setGradoopId",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setGradoopId_GradoopId",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.id.GradoopId#toByteArray",
            "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.id.GradoopId.toByteArray()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.id.GradoopId#toByteArray",
            "key" : "org.gradoop.common.model.impl.id.GradoopId.toByteArray_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setGradoopId",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setDate",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setDate(java.time.LocalDate)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setDate",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setDate_LocalDate",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDate",
            "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDate(java.time.LocalDate)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.DateTimeSerializer#serializeDate",
            "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDate_LocalDate",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setDate",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serialize",
              "kiekerPattern" : "private static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize(int[])",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "model.impl.properties.DateTimeSerializer#serialize",
              "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDate",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setTime",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setTime(java.time.LocalTime)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setTime",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setTime_LocalTime",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeTime",
            "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeTime(java.time.LocalTime)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.DateTimeSerializer#serializeTime",
            "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeTime_LocalTime",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setTime",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serialize",
              "kiekerPattern" : "private static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize(int[])",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "model.impl.properties.DateTimeSerializer#serialize",
              "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeTime",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setDateTime",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setDateTime(java.time.LocalDateTime)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setDateTime",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setDateTime_LocalDateTime",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDateTime",
            "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDateTime(java.time.LocalDateTime)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.DateTimeSerializer#serializeDateTime",
            "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDateTime_LocalDateTime",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setDateTime",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ {
              "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serialize",
              "kiekerPattern" : "private static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize(int[])",
              "otherKiekerPattern" : null,
              "module" : "gradoop-common",
              "name" : "model.impl.properties.DateTimeSerializer#serialize",
              "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]",
              "otherKey" : null,
              "parent" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDateTime",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setMap(java.util.Map)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setMap",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setMap_Map",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#byteSize",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.byteSize()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#byteSize",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.byteSize_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
            "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.write(org.apache.flink.core.memory.DataOutputView)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#write",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#validateBytesLength",
            "kiekerPattern" : "private void org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#validateBytesLength",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setList(java.util.List)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "model.impl.properties.PropertyValue#setList",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setList_List",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#byteSize",
            "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.byteSize()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#byteSize",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.byteSize_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
            "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.write(org.apache.flink.core.memory.DataOutputView)",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#write",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
            "color" : "#FFF",
            "statistic" : null,
            "hasSourceChange" : false,
            "state" : null,
            "inVMDeviationPredecessor" : 0.0,
            "inVMDeviation" : 0.0,
            "ess" : 5,
            "children" : [ ]
          }, {
            "call" : "org.gradoop.common.model.impl.properties.PropertyValue#validateBytesLength",
            "kiekerPattern" : "private void org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength()",
            "otherKiekerPattern" : null,
            "module" : "gradoop-common",
            "name" : "model.impl.properties.PropertyValue#validateBytesLength",
            "key" : "org.gradoop.common.model.impl.properties.PropertyValue.validateBytesLength_",
            "otherKey" : null,
            "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#hashCode",
    "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.hashCode()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "model.impl.properties.PropertyValue#hashCode",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.hashCode_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.GradoopTestUtils#writeAndReadFields",
    "kiekerPattern" : "public static org.gradoop.common.T org.gradoop.common.GradoopTestUtils.writeAndReadFields(java.lang.Class,org.gradoop.common.T)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "GradoopTestUtils#writeAndReadFields",
    "key" : "org.gradoop.common.GradoopTestUtils.writeAndReadFields_Class_T",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.write(org.apache.flink.core.memory.DataOutputView)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "model.impl.properties.PropertyValue#write",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView",
      "otherKey" : null,
      "parent" : "org.gradoop.common.GradoopTestUtils#writeAndReadFields",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
      "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.PropertyValue.<init>()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "model.impl.properties.PropertyValue#<init>",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.GradoopTestUtils#writeAndReadFields",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#read",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.read(org.apache.flink.core.memory.DataInputView)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "model.impl.properties.PropertyValue#read",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.read_DataInputView",
      "otherKey" : null,
      "parent" : "org.gradoop.common.GradoopTestUtils#writeAndReadFields",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#equals",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.equals(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "model.impl.properties.PropertyValue#equals",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.equals_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testWriteAndReadFields",
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
var margin = {top: 20, right: 120, bottom: 20, left: 434},
   width = 3773- margin.right - margin.left,
   height = 1225 - margin.top - margin.bottom;
