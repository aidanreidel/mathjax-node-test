console.log("ayyy");

fetch("http://localhost:3000/render")
  .then(response => response.json())
  .then(data => {
    function render_xml(id, xml_string) {
      var doc = new DOMParser().parseFromString(xml_string, "application/xml");
      var el = document.getElementById(id);
      el.appendChild(el.ownerDocument.importNode(doc.documentElement, true));
    }
    console.log(data);
    render_xml("foo", data.mml);
  });
