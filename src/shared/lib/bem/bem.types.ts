export type BemEntities = {
  block: string;
  element: string;
};

export type BemBlock<T> = T;

export type BemElement<T> = T | "" | undefined | null;

export type BemModifierObject = Record<string, string | number | boolean | undefined | null>;

export type BemModifierArray = (string | number | boolean | null | undefined)[];

export type BemModifier = string | number | BemModifierObject | BemModifierArray | "" | undefined | null;

export type BemMix = string | undefined | (string | undefined)[];

export type Classes = Record<string, string> | null | "";

export enum BEM_MODIFIER_TYPE {
  MODIFIER_KEY_DIVIDER = "--",
  MODIFIER_VALUE_DIVIDER = "-"
}

export interface BemClassNameCreator<T extends BemEntities> {
  (element?: BemElement<T["element"]>, modifier?: BemModifier, mix?: BemMix): string;
}

export interface BemBlockCreatorOptions {
  elementDivider?: string;
  modifierKeyDivider?: string;
  modifierValueDivider?: string;
}

export interface BemBlockCreator {
  <T extends BemEntities>(
    block: BemBlock<T["block"]>,
    classes?: Classes,
    options?: BemBlockCreatorOptions
  ): BemClassNameCreator<T>;
}
