import PDFMerger from "pdf-merger-js";

var merger = new PDFMerger();

const Merging = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2);

  await merger.save("merged.pdf"); //save under given name and reset the internal document

  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

export default Merging;
