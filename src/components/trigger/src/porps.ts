const triggerProps = {
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).def([]),
  showAction: PropTypes.any.def([]),
  hideAction: PropTypes.any.def([]),
  getPopupClassNameFromAlign: PropTypes.any.def(returnEmptyString),
  onPopupVisibleChange: PropTypes.func.def(noop),
  afterPopupVisibleChange: PropTypes.func.def(noop),
  popup: PropTypes.any,
  popupStyle: PropTypes.style,
  prefixCls: PropTypes.string.def("rc-trigger-popup"),
  popupClassName: PropTypes.string.def(""),
  popupPlacement: PropTypes.string,
  builtinPlacements: PropTypes.object,
  popupTransitionName: PropTypes.string,
  popupAnimation: PropTypes.any,
  mouseEnterDelay: PropTypes.number.def(0),
  mouseLeaveDelay: PropTypes.number.def(0.1),
  zIndex: PropTypes.number,
  focusDelay: PropTypes.number.def(0),
  blurDelay: PropTypes.number.def(0.15),
  getPopupContainer: PropTypes.func,
  getDocument: PropTypes.func.def(returnDocument),
  forceRender: PropTypes.looseBool,
  destroyPopupOnHide: PropTypes.looseBool.def(false),
  mask: PropTypes.looseBool.def(false),
  maskClosable: PropTypes.looseBool.def(true),
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: PropTypes.object.def(() => ({})),
  popupVisible: PropTypes.looseBool,
  defaultPopupVisible: PropTypes.looseBool.def(false),
  maskTransitionName: PropTypes.string,
  maskAnimation: PropTypes.string,
  stretch: PropTypes.string,
  alignPoint: PropTypes.looseBool, // Maybe we can support user pass position in the future
  autoDestroy: PropTypes.looseBool.def(false),
  mobile: Object,
  getTriggerDOMNode: Function,
};

export default triggerProps;
