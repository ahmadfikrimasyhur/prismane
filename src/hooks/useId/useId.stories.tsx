import { Box } from "../../components";
import useId from "./useId";
import { fr } from "../../utils";

export default {
  title: "useId",
  component: useId,
};

export const Default = () => {
  const id = useId();

  return <Box bg="primary">{id}</Box>;
};
