import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ProductDetailPageComponent } from "./pages/product-detail-page/product-detail-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

const routes: Routes =[
    {path:'', redirectTo:"home", pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'products/:id', component: ProductPageComponent},
    {path: 'product-details/:id', component: ProductDetailPageComponent},
    {path: 'About', component: AboutPageComponent},
    {path: 'Contact', component: ContactPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'login', component:LoginPageComponent},
    {path:'**', component:ErrorComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}