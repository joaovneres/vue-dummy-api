import {createRouter, createWebHistory} from 'vue-router';

const routes =[
    {path: "/home", name: "home", component: () => import("@/components/Home.vue")},
    {path: "/products", name: "products", component: () => import("@/components/product/List.vue")},
    {path: "/products/pesquisar/:pesquisa", name: "productsConsult", component: () => import("@/components/product/ListConsult.vue")},
    {path: "/product/:idProduto", name: "product", component: () => import("@/components/product/Find.vue")}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;