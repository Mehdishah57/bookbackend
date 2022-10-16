import axios from "axios";
import Book from "../../../models/book";
import handleRouteError from "../../../utils/handleRouteErrors";
import pdfParse from 'pdf-parse';
import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";

const getText = handleRouteError(async (req, res) => {
    const { id, page } = req.params;
    const book = await Book.findById(id).catch(() => null);
    if (!book) return res.status(404).send("No Book was found with this id");
    const { data } = await axios.get(book.secure_url, { responseType: "stream" });
    await fs.writeFile("./file.pdf",data, {encoding:'utf-8'})
    const file = await fs.readFile('./file.pdf'); 
    const pdfSrcDoc = await PDFDocument.load(file, { ignoreEncryption: true });
    const pdfNewDoc = await PDFDocument.create();
    const pages = await pdfNewDoc.copyPages(pdfSrcDoc, [parseInt(page)]);
    pages.forEach((page) => pdfNewDoc.addPage(page));
    const newpdf = await pdfNewDoc.save();
    //@ts-ignore
    const Parse = await pdfParse(newpdf)
    await fs.unlink("./file.pdf");
    res.status(200).send(Parse.text);
})

export default getText;