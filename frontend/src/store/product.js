import { create } from "zustand";

export const userProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success: false, message: "Please fill all fields."};
        }

        if(isNaN(newProduct.price)){
            return {success: false, message: "Price should be a Number."};
        }

        const res = await fetch("api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(newProduct)
        })

        const data = await res.json();
        
        if(data.succes){
            set((state) => ({products: [...state.products, data.data]}))
        }

        return {success: true, message: "Product added successfully."};
    },
    fetchProducts: async() => {
        try {
            const res = await fetch("/api/products")

            console.log(res);
            const data = await res.json();
            console.log(data);
            set({products: data.data});
        } catch (error) {
            console.error(error);
        }
        
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });

        const data = await res.json();
        console.log(data);
        if(!data.success) return {success: false, message: data.message};

        set(state => ({products: state.products.filter(product => product._id !== pid)}));
        return {success: true, message: data.message};
    }
}))