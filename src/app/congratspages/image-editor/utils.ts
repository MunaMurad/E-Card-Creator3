export function dataUrlToBlob(dataUrl: string): Blob {
  const {
    groups: { mime, base64data },
  } = /data:(?<mime>.+);base64,(?<base64data>.+)/.exec(dataUrl);

  const byteCharacters = atob(base64data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mime });
}