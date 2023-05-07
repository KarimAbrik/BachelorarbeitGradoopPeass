if (document.getElementById('testcaseDiv') != null) { 
   document.getElementById('testcaseDiv').innerHTML="Commit: <a href='javascript:fallbackCopyTextToClipboard(\"-commit 1cf60754812f04833bb08a9da1ba84c8098d30af -test org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject\")'>1cf60754812f04833bb08a9da1ba84c8098d30af</a><br>Test Case: org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject<br>";
}

var source = {"current":
{
 "org.gradoop.common.model.impl.properties.PropertyValue.getObject_":
 `//----------------------------------------------------------------------------
// Getter
//----------------------------------------------------------------------------
/**
 * Returns the wrapped value as object.
 *
 * @return value or {@code null} if the value is empty
 */
public Object getObject() {
    return isBoolean() ? getBoolean() : isShort() ? getShort() : isInt() ? getInt() : isLong() ? getLong() : isFloat() ? getFloat() : isDouble() ? getDouble() : isString() ? getString() : isBigDecimal() ? getBigDecimal() : isGradoopId() ? getGradoopId() : isMap() ? getMap() : isList() ? getList() : isDate() ? getDate() : isTime() ? getTime() : isDateTime() ? getDateTime() : null;
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getDateTime_":
 `/**
 * Returns the wrapped List as {@code LocalDateTime}.
 *
 * @return {@code LocalDateTime} value
 */
public LocalDateTime getDateTime() {
    return DateTimeSerializer.deserializeDateTime(Arrays.copyOfRange(rawBytes, OFFSET, DateTimeSerializer.SIZEOF_DATETIME + OFFSET));
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
    } else if (value instanceof Boolean) {
        setBoolean((Boolean) value);
    } else if (value instanceof Short) {
        setShort((Short) value);
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.byteSize_":
 `/**
 * Returns the byte size of the properties internal representation
 * @return byte size
 */
public int byteSize() {
    return rawBytes.length;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getTime_":
 `/**
 * Returns the wrapped List as {@code LocalTime}.
 *
 * @return {@code LocalTime} value
 */
public LocalTime getTime() {
    return DateTimeSerializer.deserializeTime(Arrays.copyOfRange(rawBytes, OFFSET, DateTimeSerializer.SIZEOF_TIME + OFFSET));
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getBoolean_":
 `/**
 * Returns the wrapped value as {@code boolean}.
 *
 * @return {@code boolean} value
 */
public boolean getBoolean() {
    return rawBytes[1] == -1;
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
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeDateTime_byte[]":
 `/**
 * Deserializes a {@code LocalDateTime} value.
 *
 * @param bytes serialized value
 *
 * @return {@code LocalDateTime} value
 */
public static LocalDateTime deserializeDateTime(byte[] bytes) {
    int year = Bytes.toInt(bytes, 0, SIZEOF_INT);
    int month = Bytes.toInt(bytes, SIZEOF_INT, SIZEOF_INT);
    int day = Bytes.toInt(bytes, 2 * SIZEOF_INT, SIZEOF_INT);
    int hour = Bytes.toInt(bytes, 3 * SIZEOF_INT, SIZEOF_INT);
    int minute = Bytes.toInt(bytes, 4 * SIZEOF_INT, SIZEOF_INT);
    int second = Bytes.toInt(bytes, 5 * SIZEOF_INT, SIZEOF_INT);
    int nano = Bytes.toInt(bytes, 6 * SIZEOF_INT, SIZEOF_INT);
    return LocalDateTime.of(year, month, day, hour, minute, second, nano);
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isLong_":
 `/**
 * True, if the wrapped value is of type {@code long}.
 *
 * @return true, if {@code long} value
 */
public boolean isLong() {
    return rawBytes[0] == TYPE_LONG;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isShort_":
 `/**
 * True, if the wrapped value is of type {@code short}.
 *
 * @return true, if {@code short} value
 */
public boolean isShort() {
    return rawBytes[0] == TYPE_SHORT;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isInt_":
 `/**
 * True, if the wrapped value is of type {@code int}.
 *
 * @return true, if {@code int} value
 */
public boolean isInt() {
    return rawBytes[0] == TYPE_INTEGER;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isNull_":
 `//----------------------------------------------------------------------------
// Type checking
//----------------------------------------------------------------------------
/**
 * True, if the value represents {@code null}.
 *
 * @return true, if {@code null} value
 */
public boolean isNull() {
    return rawBytes[0] == TYPE_NULL;
}`,"org.gradoop.common.model.impl.id.GradoopId.<init>_byte[]":
 `/**
 * Creates a GradoopId from a given byte representation
 *
 * @param bytes the GradoopId represented by the byte array
 */
private GradoopId(byte[] bytes) {
    this.bytes = bytes;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isDateTime_":
 `/**
 * True, if the wrapped value is of type {@code LocalDateTime}.
 *
 * @return true, if {@code LocalDateTime} value
 */
public boolean isDateTime() {
    return rawBytes[0] == TYPE_DATETIME;
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
 * @throws IOException
 */
@Override
public void write(DataOutputView outputView) throws IOException {
    // null?
    // Write type.
    byte type = rawBytes[0];
    if (rawBytes.length > LARGE_PROPERTY_THRESHOLD) {
        type |= FLAG_LARGE;
    }
    outputView.writeByte(type);
    // Write length for types with a variable length.
    if (isString() || isBigDecimal() || isMap() || isList()) {
        // Write length as an int if the "large" flag is set.
        if ((type & FLAG_LARGE) == FLAG_LARGE) {
            outputView.writeInt(rawBytes.length - OFFSET);
        } else {
            outputView.writeShort(rawBytes.length - OFFSET);
        }
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getTypeMap_":
 `/**
 * Creates a type mapping HashMap to assign a byte value to its represented Class
 *
 * @return a Map with byte to class assignments
 */
private static Map<Byte, Class> getTypeMap() {
    Map<Byte, Class> map = new HashMap<>();
    map.put(TYPE_BOOLEAN, Boolean.class);
    map.put(TYPE_SHORT, Short.class);
    map.put(TYPE_INTEGER, Integer.class);
    map.put(TYPE_LONG, Long.class);
    map.put(TYPE_FLOAT, Float.class);
    map.put(TYPE_DOUBLE, Double.class);
    map.put(TYPE_STRING, String.class);
    map.put(TYPE_BIG_DECIMAL, BigDecimal.class);
    map.put(TYPE_GRADOOP_ID, GradoopId.class);
    map.put(TYPE_MAP, Map.class);
    map.put(TYPE_LIST, List.class);
    map.put(TYPE_DATE, LocalDate.class);
    map.put(TYPE_TIME, LocalTime.class);
    map.put(TYPE_DATETIME, LocalDateTime.class);
    return Collections.unmodifiableMap(map);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getInt_":
 `/**
 * Returns the wrapped value as {@code int}.
 *
 * @return {@code int} value
 */
public int getInt() {
    return Bytes.toInt(rawBytes, OFFSET);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getLong_":
 `/**
 * Returns the wrapped value as {@code long}.
 *
 * @return {@code long} value
 */
public long getLong() {
    return Bytes.toLong(rawBytes, OFFSET);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getFloat_":
 `/**
 * Returns the wrapped value as {@code float}.
 *
 * @return {@code float} value
 */
public float getFloat() {
    return Bytes.toFloat(rawBytes, OFFSET);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getGradoopId_":
 `/**
 * Returns the wrapped value as {@code GradoopId}.
 *
 * @return {@code GradoopId} value
 */
public GradoopId getGradoopId() {
    return GradoopId.fromByteArray(Arrays.copyOfRange(rawBytes, OFFSET, GradoopId.ID_SIZE + OFFSET));
}`,"org.gradoop.common.model.impl.id.GradoopId.fromByteArray_byte[]":
 `/**
 * Returns the Gradoop ID represented by a byte array
 *
 * @param bytes byte representation
 * @return Gradoop ID
 */
public static GradoopId fromByteArray(byte[] bytes) {
    return new GradoopId(bytes);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal_":
 `/**
 * True, if the wrapped value is of type {@code BigDecimal}.
 *
 * @return true, if {@code BigDecimal} value
 * @see BigDecimal
 */
public boolean isBigDecimal() {
    return rawBytes[0] == TYPE_BIG_DECIMAL;
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getDouble_":
 `/**
 * Returns the wrapped value as {@code double}.
 *
 * @return {@code double} value
 */
public double getDouble() {
    return Bytes.toDouble(rawBytes, OFFSET);
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeDate_byte[]":
 `/**
 * Deserializes a {@code LocalDate} value.
 *
 * @param bytes serialized value
 *
 * @return {@code LocalDate} value
 */
public static LocalDate deserializeDate(byte[] bytes) {
    int year = Bytes.toInt(bytes, 0, SIZEOF_INT);
    int month = Bytes.toInt(bytes, SIZEOF_INT, SIZEOF_INT);
    int day = Bytes.toInt(bytes, 2 * SIZEOF_INT, SIZEOF_INT);
    return LocalDate.of(year, month, day);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.read_DataInputView":
 `@Override
public void read(DataInputView inputView) throws IOException {
    int length = 0;
    // type
    byte typeByte = inputView.readByte();
    // Apply bitmask to get the actual type.
    byte type = (byte) (~FLAG_LARGE & typeByte);
    // dynamic type?
    if (type == TYPE_STRING || type == TYPE_BIG_DECIMAL || type == TYPE_MAP || type == TYPE_LIST) {
        // read length
        if ((typeByte & FLAG_LARGE) == FLAG_LARGE) {
            length = inputView.readInt();
        } else {
            length = inputView.readShort();
        }
    } else if (type == TYPE_NULL) {
        length = 0;
    } else if (type == TYPE_BOOLEAN) {
        length = Bytes.SIZEOF_BOOLEAN;
    } else if (type == TYPE_SHORT) {
        length = Bytes.SIZEOF_SHORT;
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
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDateTime_LocalDateTime":
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getList_":
 `/**
 * Returns the wrapped List as {@code List<PropertyValue>}.
 *
 * @return {@code List<PropertyValue>} value
 */
public List<PropertyValue> getList() {
    PropertyValue entry;
    List<PropertyValue> list = new ArrayList<>();
    ByteArrayInputStream byteStream = new ByteArrayInputStream(rawBytes);
    DataInputStream inputStream = new DataInputStream(byteStream);
    DataInputView inputView = new DataInputViewStreamWrapper(inputStream);
    try {
        if (inputStream.skipBytes(OFFSET) != OFFSET) {
            throw new RuntimeException("Malformed entry in PropertyValue List");
        }
        while (inputStream.available() > 0) {
            entry = new PropertyValue();
            entry.read(inputView);
            list.add(entry);
        }
    } catch (IOException e) {
        throw new RuntimeException("Error reading PropertyValue");
    }
    return list;
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.setShort_short":
 `/**
 * Sets the wrapped value as {@code short} value.
 *
 * @param shortValue value
 */
public void setShort(short shortValue) {
    rawBytes = new byte[OFFSET + Bytes.SIZEOF_SHORT];
    rawBytes[0] = TYPE_SHORT;
    Bytes.putShort(rawBytes, OFFSET, shortValue);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isBoolean_":
 `/**
 * True, if the wrapped value is of type {@code boolean}.
 *
 * @return true, if {@code boolean} value
 */
public boolean isBoolean() {
    return rawBytes[0] == TYPE_BOOLEAN;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getDate_":
 `/**
 * Returns the wrapped List as {@code LocalDate}.
 *
 * @return {@code LocalDate} value
 */
public LocalDate getDate() {
    return DateTimeSerializer.deserializeDate(Arrays.copyOfRange(rawBytes, OFFSET, DateTimeSerializer.SIZEOF_DATE + OFFSET));
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isString_":
 `/**
 * True, if the wrapped value is of type {@code String}.
 *
 * @return true, if {@code String} value
 */
public boolean isString() {
    return rawBytes[0] == TYPE_STRING;
}`,"org.gradoop.common.model.impl.id.GradoopId.<init>_ObjectId":
 `/**
 * Create GradoopId from existing ObjectId.
 *
 * @param objectId ObjectId
 */
GradoopId(ObjectId objectId) {
    this.bytes = objectId.toByteArray();
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getString_":
 `/**
 * Returns the wrapped value as {@code String}.
 *
 * @return {@code String} value
 */
public String getString() {
    return Bytes.toString(rawBytes, OFFSET, rawBytes.length - OFFSET);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getBigDecimal_":
 `/**
 * Returns the wrapped value as {@code BigDecimal}.
 *
 * @return {@code BigDecimal} value
 * @see BigDecimal
 */
public BigDecimal getBigDecimal() {
    BigDecimal decimal;
    if (isBigDecimal()) {
        decimal = Bytes.toBigDecimal(rawBytes, OFFSET, rawBytes.length - OFFSET);
    } else if (isFloat()) {
        decimal = BigDecimal.valueOf(getFloat());
    } else if (isDouble()) {
        decimal = BigDecimal.valueOf(getDouble());
    } else if (isShort()) {
        decimal = BigDecimal.valueOf(getShort());
    } else if (isInt()) {
        decimal = BigDecimal.valueOf(getInt());
    } else if (isLong()) {
        decimal = BigDecimal.valueOf(getLong());
    } else if (isString()) {
        decimal = new BigDecimal(getString());
    } else {
        throw new ClassCastException("Cannot covert " + this.getType().getSimpleName() + " to " + BigDecimal.class.getSimpleName());
    }
    return decimal;
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isTime_":
 `/**
 * True, if the wrapped value is of type {@code LocalTime}.
 *
 * @return true, if {@code LocalTime} value
 */
public boolean isTime() {
    return rawBytes[0] == TYPE_TIME;
}`,"org.gradoop.common.model.impl.properties.PropertyValueTest.testSetAndGetObject_":
 `@Test
public void testSetAndGetObject() throws Exception {
    PropertyValue p = new PropertyValue();
    // null
    p.setObject(null);
    assertTrue(p.isNull());
    assertNull(p.getObject());
    // boolean
    p.setObject(BOOL_VAL_1);
    assertTrue(p.isBoolean());
    assertEquals(BOOL_VAL_1, p.getObject());
    // short
    p.setObject(SHORT_VAL_e);
    assertTrue(p.isShort());
    assertEquals(SHORT_VAL_e, p.getObject());
    // int
    p.setObject(INT_VAL_2);
    assertTrue(p.isInt());
    assertEquals(INT_VAL_2, p.getObject());
    // long
    p.setObject(LONG_VAL_3);
    assertTrue(p.isLong());
    assertEquals(LONG_VAL_3, p.getObject());
    // float
    p.setObject(FLOAT_VAL_4);
    assertTrue(p.isFloat());
    assertEquals(FLOAT_VAL_4, p.getObject());
    // double
    p.setObject(DOUBLE_VAL_5);
    assertTrue(p.isDouble());
    assertEquals(DOUBLE_VAL_5, p.getObject());
    // String
    p.setObject(STRING_VAL_6);
    assertTrue(p.isString());
    assertEquals(STRING_VAL_6, p.getObject());
    // BigDecimal
    p.setObject(BIG_DECIMAL_VAL_7);
    assertTrue(p.isBigDecimal());
    assertEquals(BIG_DECIMAL_VAL_7, p.getObject());
    // GradoopId
    p.setObject(GRADOOP_ID_VAL_8);
    assertTrue(p.isGradoopId());
    assertEquals(GRADOOP_ID_VAL_8, p.getObject());
    // Map
    p.setObject(MAP_VAL_9);
    assertTrue(p.isMap());
    assertEquals(MAP_VAL_9, p.getObject());
    // List
    p.setObject(LIST_VAL_a);
    assertTrue(p.isList());
    assertEquals(LIST_VAL_a, p.getObject());
    //Date
    p.setObject(DATE_VAL_b);
    assertTrue(p.isDate());
    assertEquals(DATE_VAL_b, p.getDate());
    //Time
    p.setObject(TIME_VAL_c);
    assertTrue(p.isTime());
    assertEquals(TIME_VAL_c, p.getTime());
    //DateTime
    p.setObject(DATETIME_VAL_d);
    assertTrue(p.isDateTime());
    assertEquals(DATETIME_VAL_d, p.getDateTime());
}`,"org.gradoop.common.model.impl.id.GradoopId.equals_Object":
 `/**
 * Checks if the specified object is equal to the current id.
 *
 * @param o the object to be compared
 * @return true, iff the specified id is equal to this id
 */
@Override
public boolean equals(Object o) {
    if (this == o) {
        return true;
    }
    if (o == null || getClass() != o.getClass()) {
        return false;
    }
    return equals(bytes, ((GradoopId) o).bytes, 0, 0);
}`,"org.gradoop.common.model.impl.id.GradoopId.toByteArray_":
 `/**
 * Returns byte representation of a GradoopId
 *
 * @return Byte representation
 */
@SuppressWarnings(value = "EI_EXPOSE_REP", justification = "never mutated")
public byte[] toByteArray() {
    return bytes;
}`,"org.gradoop.common.model.impl.id.GradoopId.equalsInRange_byte[]_byte[]_int_int_int":
 `/**
 * Checks if the given byte arrays contain equal elements in specified given range.
 *
 * @param first first array
 * @param second second array
 * @param firstPos start index in the first array
 * @param secondPos start index in the second array
 * @param length number of bytes to compare for equality
 *
 * @return true, iff both arrays have equal values in the specified range
 */
private static boolean equalsInRange(byte[] first, byte[] second, int firstPos, int secondPos, int length) {
    int upperBound = firstPos + length;
    while (firstPos < upperBound) {
        if (first[firstPos] != second[secondPos]) {
            return false;
        }
        ++firstPos;
        ++secondPos;
    }
    return true;
}`,"org.gradoop.common.model.impl.id.GradoopId.equals_byte[]_byte[]_int_int":
 `/**
 * Checks if the Gradoop ids stored at the specified positions are equal.
 *
 * Note: The order in which the id components are compared is taken from
 * {@link ObjectId#equals(Object)}. However, we compare the values of the byte arrays directly.
 *
 * @param first first gradoop id
 * @param second second gradoop id
 * @param firstPos start index in the first byte array
 * @param secondPos start index in the second byte array
 *
 * @return true, iff first is equal to second
 */
static boolean equals(byte[] first, byte[] second, int firstPos, int secondPos) {
    // compare counter (byte 9 to 11)
    if (!equalsInRange(first, second, firstPos + 9, secondPos + 9, 3)) {
        return false;
    }
    // compare machine identifier (byte 4 to 6)
    if (!equalsInRange(first, second, firstPos + 4, secondPos + 4, 2)) {
        return false;
    }
    // compare process identifier (byte 7 to 8)
    if (!equalsInRange(first, second, firstPos + 7, secondPos + 7, 1)) {
        return false;
    }
    // compare timestamp (byte 0 to 3)
    if (!equalsInRange(first, second, firstPos, secondPos, 3)) {
        return false;
    }
    return true;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isFloat_":
 `/**
 * True, if the wrapped value is of type {@code float}.
 *
 * @return true, if {@code float} value
 */
public boolean isFloat() {
    return rawBytes[0] == TYPE_FLOAT;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.<init>_":
 `/**
 * Default constructor.
 */
public PropertyValue() {
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isMap_":
 `/**
 * True, if the wrapped value is of type {@code Map}.
 *
 * @return true, if {@code Map} value
 */
public boolean isMap() {
    return rawBytes[0] == TYPE_MAP;
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isGradoopId_":
 `/**
 * True, if the wrapped value is of type {@code GradoopId}.
 *
 * @return true, if {@code GradoopId} value
 */
public boolean isGradoopId() {
    return rawBytes[0] == TYPE_GRADOOP_ID;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isDate_":
 `/**
 * True, if the wrapped value is of type {@code LocalDate}.
 *
 * @return true, if {@code LocalDate} value
 */
public boolean isDate() {
    return rawBytes[0] == TYPE_DATE;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isDouble_":
 `/**
 * True, if the wrapped value is of type {@code double}.
 *
 * @return true, if {@code double} value
 */
public boolean isDouble() {
    return rawBytes[0] == TYPE_DOUBLE;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getShort_":
 `/**
 * Returns the wrapped value as {@code short}.
 *
 * @return {@code short} value
 */
public short getShort() {
    return Bytes.toShort(rawBytes, OFFSET);
}`,"org.gradoop.common.model.impl.properties.PropertyValue.hashCode_":
 `@Override
public int hashCode() {
    return Arrays.hashCode(rawBytes);
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
}`,"org.gradoop.common.model.impl.properties.PropertyValue.isList_":
 `/**
 * True, if the wrapped value is of type {@code List}.
 *
 * @return true, if {@code List} value
 */
public boolean isList() {
    return rawBytes[0] == TYPE_LIST;
}`,"org.gradoop.common.model.impl.properties.PropertyValue.getMap_":
 `/**
 * Returns the wrapped Map as {@code Map<PropertyValue, PropertyValue>}.
 *
 * @return {@code Map<PropertyValue, PropertyValue>} value
 */
public Map<PropertyValue, PropertyValue> getMap() {
    PropertyValue key;
    PropertyValue value;
    Map<PropertyValue, PropertyValue> map = new HashMap<>();
    ByteArrayInputStream byteStream = new ByteArrayInputStream(rawBytes);
    DataInputStream inputStream = new DataInputStream(byteStream);
    DataInputView inputView = new DataInputViewStreamWrapper(inputStream);
    try {
        if (inputStream.skipBytes(OFFSET) != OFFSET) {
            throw new RuntimeException("Malformed entry in PropertyValue List");
        }
        while (inputStream.available() > 0) {
            key = new PropertyValue();
            key.read(inputView);
            value = new PropertyValue();
            value.read(inputView);
            map.put(key, value);
        }
    } catch (IOException e) {
        throw new RuntimeException("Error reading PropertyValue");
    }
    return map;
}`,"org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeTime_byte[]":
 `/**
 * Deserializes a {@code LocalTime} value.
 *
 * @param bytes serialized value
 *
 * @return {@code LocalTime} value
 */
public static LocalTime deserializeTime(byte[] bytes) {
    int hour = Bytes.toInt(bytes, 0, SIZEOF_INT);
    int minute = Bytes.toInt(bytes, SIZEOF_INT, SIZEOF_INT);
    int second = Bytes.toInt(bytes, 2 * SIZEOF_INT, SIZEOF_INT);
    int nano = Bytes.toInt(bytes, 3 * SIZEOF_INT, SIZEOF_INT);
    return LocalTime.of(hour, minute, second, nano);
}`,},
};
var treeData = [
{
  "call" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
  "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValueTest.testSetAndGetObject()",
  "otherKiekerPattern" : null,
  "module" : "gradoop-common",
  "name" : "properties.PropertyValueTest#testSetAndGetObject",
  "key" : "org.gradoop.common.model.impl.properties.PropertyValueTest.testSetAndGetObject_",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#create",
    "kiekerPattern" : "public static org.gradoop.common.model.impl.properties.PropertyValue org.gradoop.common.model.impl.properties.PropertyValue.create(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#create",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.create_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
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
      "name" : "properties.PropertyValue#<init>",
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
        "name" : "properties.PropertyValue#setObject",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setString",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setString(java.lang.String)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#setString",
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
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setBoolean",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setBoolean(boolean)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#setBoolean",
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
          "name" : "properties.PropertyValue#setInt",
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
          "name" : "properties.PropertyValue#setLong",
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
          "name" : "properties.PropertyValue#setFloat",
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
          "name" : "properties.PropertyValue#setDouble",
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
          "name" : "properties.PropertyValue#setBigDecimal",
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
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setGradoopId",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setGradoopId(org.gradoop.common.model.impl.id.GradoopId)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#setGradoopId",
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
            "name" : "id.GradoopId#toByteArray",
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
          "name" : "properties.PropertyValue#setDate",
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
            "name" : "properties.DateTimeSerializer#serializeDate",
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
              "name" : "properties.DateTimeSerializer#serialize",
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
          "name" : "properties.PropertyValue#setTime",
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
            "name" : "properties.DateTimeSerializer#serializeTime",
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
              "name" : "properties.DateTimeSerializer#serialize",
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
          "name" : "properties.PropertyValue#setDateTime",
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
            "name" : "properties.DateTimeSerializer#serializeDateTime",
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
              "name" : "properties.DateTimeSerializer#serialize",
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
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setShort",
          "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setShort(short)",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#setShort",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setShort_short",
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
        } ]
      } ]
    } ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getTypeMap",
    "kiekerPattern" : "private static java.util.Map org.gradoop.common.model.impl.properties.PropertyValue.getTypeMap()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#getTypeMap",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getTypeMap_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
    "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.PropertyValue.<init>()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#<init>",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
    "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setObject(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#setObject",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setObject_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setBoolean",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setBoolean(boolean)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setBoolean",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setBoolean_boolean",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setShort",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setShort(short)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setShort",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setShort_short",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setInt",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setInt(int)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setInt",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setInt_int",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setLong",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setLong(long)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setLong",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setLong_long",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setFloat",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setFloat(float)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setFloat",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setFloat_float",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setDouble",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setDouble(double)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setDouble",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setDouble_double",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setString",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setString(java.lang.String)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setString",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setString_String",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setBigDecimal",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setBigDecimal(java.math.BigDecimal)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setBigDecimal",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setBigDecimal_BigDecimal",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setGradoopId",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setGradoopId(org.gradoop.common.model.impl.id.GradoopId)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setGradoopId",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setGradoopId_GradoopId",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.id.GradoopId#toByteArray",
        "kiekerPattern" : "public byte[] org.gradoop.common.model.impl.id.GradoopId.toByteArray()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "id.GradoopId#toByteArray",
        "key" : "org.gradoop.common.model.impl.id.GradoopId.toByteArray_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setGradoopId",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setMap(java.util.Map)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setMap",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setMap_Map",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#byteSize",
        "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.byteSize()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#byteSize",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.byteSize_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.write(org.apache.flink.core.memory.DataOutputView)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#write",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setMap",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isString",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isString",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBigDecimal",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isBigDecimal",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isMap",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isMap()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isMap",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isMap_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isList",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isList()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isList",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isList_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setList(java.util.List)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setList",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setList_List",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#byteSize",
        "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.byteSize()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#byteSize",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.byteSize_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.write(org.apache.flink.core.memory.DataOutputView)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#write",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.write_DataOutputView",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isString",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isString()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isString",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isString_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBigDecimal",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isBigDecimal",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isMap",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isMap()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isMap",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isMap_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
          "color" : "#FFF",
          "statistic" : null,
          "hasSourceChange" : false,
          "state" : null,
          "inVMDeviationPredecessor" : 0.0,
          "inVMDeviation" : 0.0,
          "ess" : 4,
          "children" : [ ]
        }, {
          "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isList",
          "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isList()",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.PropertyValue#isList",
          "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isList_",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#write",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setDate",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setDate(java.time.LocalDate)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setDate",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setDate_LocalDate",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDate",
        "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDate(java.time.LocalDate)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.DateTimeSerializer#serializeDate",
        "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDate_LocalDate",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setDate",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serialize",
          "kiekerPattern" : "private static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize(int[])",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.DateTimeSerializer#serialize",
          "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDate",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setTime",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setTime(java.time.LocalTime)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setTime",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setTime_LocalTime",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeTime",
        "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeTime(java.time.LocalTime)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.DateTimeSerializer#serializeTime",
        "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeTime_LocalTime",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setTime",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serialize",
          "kiekerPattern" : "private static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize(int[])",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.DateTimeSerializer#serialize",
          "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeTime",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#setDateTime",
      "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.setDateTime(java.time.LocalDateTime)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#setDateTime",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.setDateTime_LocalDateTime",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDateTime",
        "kiekerPattern" : "public static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDateTime(java.time.LocalDateTime)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.DateTimeSerializer#serializeDateTime",
        "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serializeDateTime_LocalDateTime",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#setDateTime",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serialize",
          "kiekerPattern" : "private static byte[] org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize(int[])",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "properties.DateTimeSerializer#serialize",
          "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.serialize_int[]",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#serializeDateTime",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isNull",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isNull()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isNull",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isNull_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
    "kiekerPattern" : "public java.lang.Object org.gradoop.common.model.impl.properties.PropertyValue.getObject()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#getObject",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getObject_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBoolean",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBoolean()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isBoolean",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBoolean_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isShort",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isShort()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isShort",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isShort_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isInt",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isInt()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isInt",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isInt_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isLong",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isLong()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isLong",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isLong_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isFloat",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isFloat()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isFloat",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isFloat_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isDouble",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isDouble()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isDouble",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isDouble_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isString",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isString",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isString_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBigDecimal",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isBigDecimal",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isGradoopId",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isGradoopId()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isGradoopId",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isGradoopId_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isMap",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isMap()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isMap",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isMap_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isList",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isList()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isList",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isList_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isDate",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isDate()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isDate",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isDate_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isTime",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isTime()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isTime",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isTime_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isDateTime",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isDateTime()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#isDateTime",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isDateTime_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getBoolean",
      "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.getBoolean()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getBoolean",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getBoolean_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getShort",
      "kiekerPattern" : "public short org.gradoop.common.model.impl.properties.PropertyValue.getShort()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getShort",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getShort_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getInt",
      "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.getInt()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getInt",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getInt_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getLong",
      "kiekerPattern" : "public long org.gradoop.common.model.impl.properties.PropertyValue.getLong()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getLong",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getLong_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getFloat",
      "kiekerPattern" : "public float org.gradoop.common.model.impl.properties.PropertyValue.getFloat()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getFloat",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getFloat_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getDouble",
      "kiekerPattern" : "public double org.gradoop.common.model.impl.properties.PropertyValue.getDouble()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getDouble",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getDouble_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getString",
      "kiekerPattern" : "public java.lang.String org.gradoop.common.model.impl.properties.PropertyValue.getString()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getString",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getString_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ ]
    }, {
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getBigDecimal",
      "kiekerPattern" : "public java.math.BigDecimal org.gradoop.common.model.impl.properties.PropertyValue.getBigDecimal()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getBigDecimal",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getBigDecimal_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBigDecimal",
        "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#isBigDecimal",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getBigDecimal",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getGradoopId",
      "kiekerPattern" : "public org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.properties.PropertyValue.getGradoopId()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getGradoopId",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getGradoopId_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.id.GradoopId#fromByteArray",
        "kiekerPattern" : "public static org.gradoop.common.model.impl.id.GradoopId org.gradoop.common.model.impl.id.GradoopId.fromByteArray(byte[])",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "id.GradoopId#fromByteArray",
        "key" : "org.gradoop.common.model.impl.id.GradoopId.fromByteArray_byte[]",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getGradoopId",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ {
          "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
          "kiekerPattern" : "private new org.gradoop.common.model.impl.id.GradoopId.<init>(byte[])",
          "otherKiekerPattern" : null,
          "module" : "gradoop-common",
          "name" : "id.GradoopId#<init>",
          "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_byte[]",
          "otherKey" : null,
          "parent" : "org.gradoop.common.model.impl.id.GradoopId#fromByteArray",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getMap",
      "kiekerPattern" : "public java.util.Map org.gradoop.common.model.impl.properties.PropertyValue.getMap()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getMap",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getMap_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
        "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.PropertyValue.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#<init>",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getMap",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#read",
        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.read(org.apache.flink.core.memory.DataInputView)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#read",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.read_DataInputView",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getMap",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#hashCode",
        "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.hashCode()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#hashCode",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.hashCode_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getMap",
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
      "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getList",
      "kiekerPattern" : "public java.util.List org.gradoop.common.model.impl.properties.PropertyValue.getList()",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.PropertyValue#getList",
      "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getList_",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getObject",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#<init>",
        "kiekerPattern" : "public new org.gradoop.common.model.impl.properties.PropertyValue.<init>()",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#<init>",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.<init>_",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getList",
        "color" : "#FFF",
        "statistic" : null,
        "hasSourceChange" : false,
        "state" : null,
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "children" : [ ]
      }, {
        "call" : "org.gradoop.common.model.impl.properties.PropertyValue#read",
        "kiekerPattern" : "public void org.gradoop.common.model.impl.properties.PropertyValue.read(org.apache.flink.core.memory.DataInputView)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "properties.PropertyValue#read",
        "key" : "org.gradoop.common.model.impl.properties.PropertyValue.read_DataInputView",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getList",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBoolean",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBoolean()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isBoolean",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBoolean_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isShort",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isShort()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isShort",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isShort_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isInt",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isInt()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isInt",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isInt_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isLong",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isLong()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isLong",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isLong_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isFloat",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isFloat()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isFloat",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isFloat_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isDouble",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isDouble()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isDouble",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isDouble_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isString",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isString()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isString",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isString_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.id.GradoopId#<init>",
    "kiekerPattern" : "new org.gradoop.common.model.impl.id.GradoopId.<init>(org.bson.types.ObjectId)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "id.GradoopId#<init>",
    "key" : "org.gradoop.common.model.impl.id.GradoopId.<init>_ObjectId",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
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
    "name" : "id.GradoopId#get",
    "key" : "org.gradoop.common.model.impl.id.GradoopId.get_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
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
      "name" : "id.GradoopId#<init>",
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
    "name" : "comparators.EPGMIdentifiableComparator#<init>",
    "key" : "org.gradoop.common.model.impl.comparators.EPGMIdentifiableComparator.<init>_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#hashCode",
    "kiekerPattern" : "public int org.gradoop.common.model.impl.properties.PropertyValue.hashCode()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#hashCode",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.hashCode_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isBigDecimal",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isBigDecimal",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isBigDecimal_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isGradoopId",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isGradoopId()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isGradoopId",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isGradoopId_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.id.GradoopId#equals",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.id.GradoopId.equals(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "id.GradoopId#equals",
    "key" : "org.gradoop.common.model.impl.id.GradoopId.equals_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.id.GradoopId#equals",
      "kiekerPattern" : "static boolean org.gradoop.common.model.impl.id.GradoopId.equals(byte[],byte[],int,int)",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "id.GradoopId#equals",
      "key" : "org.gradoop.common.model.impl.id.GradoopId.equals_byte[]_byte[]_int_int",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.id.GradoopId#equals",
      "color" : "#FFF",
      "statistic" : null,
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "children" : [ {
        "call" : "org.gradoop.common.model.impl.id.GradoopId#equalsInRange",
        "kiekerPattern" : "private static boolean org.gradoop.common.model.impl.id.GradoopId.equalsInRange(byte[],byte[],int,int,int)",
        "otherKiekerPattern" : null,
        "module" : "gradoop-common",
        "name" : "id.GradoopId#equalsInRange",
        "key" : "org.gradoop.common.model.impl.id.GradoopId.equalsInRange_byte[]_byte[]_int_int_int",
        "otherKey" : null,
        "parent" : "org.gradoop.common.model.impl.id.GradoopId#equals",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isMap",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isMap()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isMap",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isMap_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#equals",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.equals(java.lang.Object)",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#equals",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.equals_Object",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isList",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isList()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isList",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isList_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isDate",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isDate()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isDate",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isDate_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getDate",
    "kiekerPattern" : "public java.time.LocalDate org.gradoop.common.model.impl.properties.PropertyValue.getDate()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#getDate",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getDate_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#deserializeDate",
      "kiekerPattern" : "public static java.time.LocalDate org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeDate(byte[])",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.DateTimeSerializer#deserializeDate",
      "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeDate_byte[]",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getDate",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isTime",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isTime()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isTime",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isTime_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getTime",
    "kiekerPattern" : "public java.time.LocalTime org.gradoop.common.model.impl.properties.PropertyValue.getTime()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#getTime",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getTime_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#deserializeTime",
      "kiekerPattern" : "public static java.time.LocalTime org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeTime(byte[])",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.DateTimeSerializer#deserializeTime",
      "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeTime_byte[]",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getTime",
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
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#isDateTime",
    "kiekerPattern" : "public boolean org.gradoop.common.model.impl.properties.PropertyValue.isDateTime()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#isDateTime",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.isDateTime_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ ]
  }, {
    "call" : "org.gradoop.common.model.impl.properties.PropertyValue#getDateTime",
    "kiekerPattern" : "public java.time.LocalDateTime org.gradoop.common.model.impl.properties.PropertyValue.getDateTime()",
    "otherKiekerPattern" : null,
    "module" : "gradoop-common",
    "name" : "properties.PropertyValue#getDateTime",
    "key" : "org.gradoop.common.model.impl.properties.PropertyValue.getDateTime_",
    "otherKey" : null,
    "parent" : "org.gradoop.common.model.impl.properties.PropertyValueTest#testSetAndGetObject",
    "color" : "#FFF",
    "statistic" : null,
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "children" : [ {
      "call" : "org.gradoop.common.model.impl.properties.DateTimeSerializer#deserializeDateTime",
      "kiekerPattern" : "public static java.time.LocalDateTime org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeDateTime(byte[])",
      "otherKiekerPattern" : null,
      "module" : "gradoop-common",
      "name" : "properties.DateTimeSerializer#deserializeDateTime",
      "key" : "org.gradoop.common.model.impl.properties.DateTimeSerializer.deserializeDateTime_byte[]",
      "otherKey" : null,
      "parent" : "org.gradoop.common.model.impl.properties.PropertyValue#getDateTime",
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
var margin = {top: 20, right: 120, bottom: 20, left: 336},
   width = 3752- margin.right - margin.left,
   height = 2625 - margin.top - margin.bottom;
