import { PropType } from "vue";

const menuProps = {
  /**
   * 点击事件
   */
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
  },
};

export default menuProps;
