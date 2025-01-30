import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors"; //Middleware

const app = express();
app.use(cors()); //Usando cors como middleware
app.use(express.json());

// Garantir que as consultas não solicitadas não seja permitica no banco de dados
mongoose.set("strictQuery", true);

mongoose.connect('mongodb://localhost:27017/test');

// Definindo as características dos produtos
const productSchema = new mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    cover: String,
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
    res.json("Conectado");
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(400).json({ message: "Livro não encontrado" });
            // res.json(product);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/products", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.json(savedProduct)
    } catch (err) {
        res.status(500).json(err);
    }
});

app.put("/products/:id", async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true
            });
        res.json(updateProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.delete("/products/:id", async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deleteProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

app.listen(8800, () => {
    console.log("Backend conectado");
});