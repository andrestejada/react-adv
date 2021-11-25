import { lazy, LazyExoticComponent } from "react"
import { NolazyLoading } from "../01-lazyload/pages/NolazyLoading";

type JSXComponent = ()=> JSX.Element;

interface Route{
    path:string;
    Component:LazyExoticComponent<JSXComponent>| JSXComponent ;
    name:string;
    children?:Route[];
}


//const LazyPage1 = lazy(()=> import('../01-lazyload/pages/LazyPage1'))


export const routes:Route[] =[
    {
        path:'/lazyload',
        Component:lazy(()=> import('../01-lazyload/layout/LazyLayout')),
        name:'LazyLoading Nested'
    },
    {
        path:'/no-lazyloding',
        Component:NolazyLoading,
        name:'No lazyloading'
    }
]