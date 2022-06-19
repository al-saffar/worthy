import { View, Dimensions } from "react-native";
import styles from "./../styles";
import { diagram } from "./../diagram";
import { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";

export default function CircleDiagram() {
  const [total, setTotal] = useState(0);

  useEffect(() => {}, []);

  function calculateTotalWorth(data) {
    let sum = data.reduce((partialSum, item) => partialSum + item.amount, 0);
    setTotal(sum);
  }

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.piechart}>
      <PieChart
        data={diagram}
        width={Dimensions.get("window").width}
        height={260}
        chartConfig={chartConfig}
        accessor={"amount"}
        backgroundColor={"transparent"}
        center={[100, 0]}
        hasLegend={false}
        absolute
      />
    </View>
  );
}
