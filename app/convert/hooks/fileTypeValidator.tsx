export function fileTypeValidator(fileExtension: string) {
  if (fileExtension !== 'csv') {
    return true;
  } else {
    return false;
  }
}
