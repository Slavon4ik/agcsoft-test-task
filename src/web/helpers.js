export function getClassModifiers(settings) {
  return settings.map((setting) => {
    return setting.modifiers.reduce((classes, modifier) => {
      return `${classes} ${classes}--${modifier}`;
    }, setting.className);
  });
}