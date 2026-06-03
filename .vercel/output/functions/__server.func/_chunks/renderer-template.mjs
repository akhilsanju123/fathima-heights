import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>HFHS</title>\n    <meta property="og:title" content="HFHS">\n  <meta name="twitter:title" content="HFHS">\n  <meta name="description" content="Fathima Heights is a dynamic, responsive school website for Holy Fathima High School.">\n  <meta property="og:description" content="Fathima Heights is a dynamic, responsive school website for Holy Fathima High School.">\n  <meta name="twitter:description" content="Fathima Heights is a dynamic, responsive school website for Holy Fathima High School.">\n  <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e7ef34b7-a873-44b0-8b73-182eec2ac6da/id-preview-b8677a4a--e2863a2a-0487-4a60-9c3f-2cc6ff10e161.lovable.app-1778315679729.png">\n  <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e7ef34b7-a873-44b0-8b73-182eec2ac6da/id-preview-b8677a4a--e2863a2a-0487-4a60-9c3f-2cc6ff10e161.lovable.app-1778315679729.png">\n  <meta name="twitter:card" content="summary_large_image">\n  <meta property="og:type" content="website">\n</head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/start.ts"><\/script>\n  </body>\n</html>\n', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
