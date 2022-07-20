import { withInstall } from "/@/utils";
import Breadcrumb from "./src/Breadcrumb.vue";
import BreadcrumbItem from "./src/BreadcrumbItem.vue";
import BreadcrumbSeparator from "./src/BreadcrumbSeparator.vue";
import "ant-design-vue/lib/breadcrumb/style";

/* istanbul ignore next */
export const StsBreadcrumb = withInstall(Breadcrumb);
export const StsBreadcrumbItem = withInstall(BreadcrumbItem);
export const StsBreadcrumbSeparator = withInstall(BreadcrumbSeparator);
