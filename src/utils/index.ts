export function getIsImage (src: string | undefined | null): boolean {
  let isImage = false;
  if (src && typeof src === 'string' && src.indexOf('/') !== -1) {
    isImage = true;
  }
  return isImage;
}

export function transformSize (
  size: string | number | undefined | null,
  unit = 'px'
): number | string {
  if (size && typeof size === 'string') {
    return (/(px|em|rem|vw|vh)$/.test(size) ? size : `${size}${unit}`);
  } else {
    return `${size}${unit}`;
  }
}
