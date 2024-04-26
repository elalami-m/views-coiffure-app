import { useEffect, useState } from "react";
import { Text } from "react-native";

const Timer = ({ minutes }: { minutes: number }) => {
  const [timer, setTimer] = useState<number>(minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer((timer) => (timer > 0 ? timer - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Text>{timer}</Text>;
};

export default Timer;
