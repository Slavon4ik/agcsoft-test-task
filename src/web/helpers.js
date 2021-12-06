export function getClassModifiers(setting) {
  return setting.modifiers.reduce((classes, modifier) => {
    return `${classes} ${setting.className}--${modifier}`;
  }, setting.className);
}