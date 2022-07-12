import { placementPosition, PlacementPosition } from "/@/enums/TypeEnums";

const tootipProps = {
  /**
   * 提示文字
   */
  title: {
    type: String,
    default: "",
  },
  /**
   * 是否可见
   */
  visible: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: PlacementPosition.default,
    validator: (v: string) => placementPosition.includes(v),
  },
};

export default tootipProps;
