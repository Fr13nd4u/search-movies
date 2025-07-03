import { BEM_MODIFIER_TYPE, BemClassNameCreator, BemEntities, Classes } from "./bem.types";
import { createBem as originalCreateBem } from "./createBem";

const customCreateBem = <T extends BemEntities>(block: string, classes: Classes | undefined): BemClassNameCreator<T> =>
  originalCreateBem<T>(block, classes, {
    modifierKeyDivider: BEM_MODIFIER_TYPE.MODIFIER_KEY_DIVIDER,
    modifierValueDivider: BEM_MODIFIER_TYPE.MODIFIER_VALUE_DIVIDER
  });

export { customCreateBem as createBem };
