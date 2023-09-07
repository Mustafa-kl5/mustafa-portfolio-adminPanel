export function isValidFileType(file) {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  return allowedTypes.includes(file.type);
}
