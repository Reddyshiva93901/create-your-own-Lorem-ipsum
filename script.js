const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mauris eu elit blandit hendrerit. Nunc tincidunt erat vel massa ultrices rhoncus. Nulla dictum, eros sit amet sagittis fermentum, eros est consequat ligula, vel interdum est sapien a justo. Sed malesuada varius quam, a rhoncus sapien bibendum at. Quisque nec tellus eget turpis gravida auctor. Integer id augue ut odio finibus viverra. Etiam eget libero eu metus bibendum sollicitudin. Suspendisse varius purus nec augue gravida, non blandit tellus blandit. Nulla sit amet nisl vel velit vulputate fringilla quis nec justo.";

document.getElementById("generateBtn").addEventListener("click", () => {
  document.getElementById("output").value = generateLoremIpsum();
});

function generateLoremIpsum() {
  let loremIpsum = "";
  for (let i = 0; i < 5; i++) {
    loremIpsum += loremIpsumText + "\n\n";
  }
  return loremIpsum;
}
