./peass searchcause -rcaStrategy UNTIL_SOURCE_CHANGE -propertyFolder results/properties_gradoop -test org.gradoop.model.impl.DefaultVertexTest#createWithIDTest -warmup 5 -iterations 5 -repetitions 2 -vms 30 -timeout 5 -type1error 0.2 -type2error 0.1 -measurementStrategy PARALLEL -commit 937394435a5e1430d025a1d7cc9f47224ea805b0 -folder ../projects/gradoop/ -executionFile results/coverageSelection_gradoop.json  &> rca_937394_org.gradoop.model.impl.DefaultVertexTest#createWithIDTest.txt
./peass searchcause -rcaStrategy UNTIL_SOURCE_CHANGE -propertyFolder results/properties_gradoop -test org.gradoop.model.impl.DefaultVertexTest#createWithIDLabelsEdgesTest -warmup 5 -iterations 5 -repetitions 2 -vms 30 -timeout 5 -type1error 0.2 -type2error 0.1 -measurementStrategy PARALLEL -commit 937394435a5e1430d025a1d7cc9f47224ea805b0 -folder ../projects/gradoop/ -executionFile results/coverageSelection_gradoop.json  &> rca_937394_org.gradoop.model.impl.DefaultVertexTest#createWithIDLabelsEdgesTest.txt
./peass searchcause -rcaStrategy UNTIL_SOURCE_CHANGE -propertyFolder results/properties_gradoop -test org.gradoop.sna.io.reader.CSVReaderTest#checkEdgeCSVInputTest -warmup 5 -iterations 5 -repetitions 2 -vms 30 -timeout 5 -type1error 0.2 -type2error 0.1 -measurementStrategy PARALLEL -commit 1d0ec13a4f6cd5db01007b656c36378913edd21c -folder ../projects/gradoop/ -executionFile results/coverageSelection_gradoop.json  &> rca_1d0ec1_org.gradoop.sna.io.reader.CSVReaderTest#checkEdgeCSVInputTest.txt
./peass searchcause -rcaStrategy UNTIL_SOURCE_CHANGE -propertyFolder results/properties_gradoop -test org.gradoop.model.impl.DefaultVertexTest#createDefaultVertexTest -warmup 5 -iterations 5 -repetitions 2 -vms 30 -timeout 5 -type1error 0.2 -type2error 0.1 -measurementStrategy PARALLEL -commit 937394435a5e1430d025a1d7cc9f47224ea805b0 -folder ../projects/gradoop/ -executionFile results/coverageSelection_gradoop.json  &> rca_937394_org.gradoop.model.impl.DefaultVertexTest#createDefaultVertexTest.txt
./peass searchcause -rcaStrategy UNTIL_SOURCE_CHANGE -propertyFolder results/properties_gradoop -test org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest -warmup 5 -iterations 5 -repetitions 1000000 -vms 30 -timeout 5 -type1error 0.2 -type2error 0.1 -measurementStrategy PARALLEL -commit bde56c2abc9485c8deec1a06d840ea4e14249a90 -folder ../projects/gradoop/ -executionFile results/coverageSelection_gradoop.json  &> rca_bde56c_org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest.txt
./peass searchcause -rcaStrategy UNTIL_SOURCE_CHANGE -propertyFolder results/properties_gradoop -test org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest -warmup 5 -iterations 5 -repetitions 2 -vms 30 -timeout 5 -type1error 0.2 -type2error 0.1 -measurementStrategy PARALLEL -commit 1decbef07273217fdf80d332b7dee87504a119fc -folder ../projects/gradoop/ -executionFile results/coverageSelection_gradoop.json  &> rca_1decbe_org.gradoop.io.reader.SimpleVertexReaderTest#readBasicGraphTest.txt
