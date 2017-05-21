var reg = new RegExp('s?([0-9]{1,2})[e,x]?([0-9]{1,2})', 'ig');
var url = document.getElementsByTagName('video') [0].src;
var matches = reg.exec(document.getElementById('file_title').innerText);
var fileName = 'Scandal S' + (matches[1].length > 1 ? '' : '0') + matches[1] + '.e' + matches[2] + '.mp4';
window.prompt('Copy to clipboard: Ctrl+C, Enter', 'wget -O "' + fileName + '" ' + url);
