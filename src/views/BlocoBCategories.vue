<template>
<transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
    <div class="blocobmenu">
        <div class="containerReduced">
          
            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$router.go(-1)"> 
                    <closeIcon rectBackgroundColor="#FFFFFF" strokeColor="#3E3E3E" borderColor="#D5D5D5"/>
                </button>
            </transition>

            <div class="row">
                <transition appear enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
                    <div class="col-12 col-md-5 d-none d-md-block space"></div>
                </transition>

                <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                    
                    <nav class="col-12 col-md-4 blocoBSelectCategory">
                        <ul class="categoryMenu" ref="filterCategory" key="filterCategory" >
                            <li v-for="category in categories"> <!-- :class="(category.id === selectedCategory ? 'filters__item active': 'filters__item')"-->
                                
                                <a  href="javascript:void(0);">{{category.name}}</a>
                                
                                <ul :class="'cat-'+selectedCategory+' collectionMenu'" ref="filterCollection" key="filterCollection">
                                    <li class="filters__item" v-for="collection in collections" :class="(collection.id === selectedCollection ? 'filters__item active': 'filters__item')">
                                        <router-link 
                                        :to="{path: '/bloco-b/category/'+ category.id + '/collection/' + collection.id + '/'}" 
                                        >{{collection.name}}</router-link>
                                        
                                    </li>
                                </ul>

                            </li>
                        </ul>

                        <router-link to="/simulator" class="simulatorLink">Simulador</router-link>
                    </nav>
                </transition>

                
            </div>
            
        </div>
    </div>
</transition>
</template>

<script>
import closeIcon from '../components/ui/closeIcon.vue'
import submitIcon from '@/components/ui/submitIcon.vue'

export default {
    name: 'blocobmenu',
    components:{
        closeIcon,
        submitIcon
    },
    data() {
        return {
            categories: [],
            collections: [],
            selectedCategory: null,
            selectedCollection: null
        }
    },
    beforeCreate() {
        this.$http.get('../mocks/products-list-mock.json').then(response => {
            this.categories = response.data.categories
            this.collections = response.data.collections
            this.$eventBus.$emit('pageFinishLoad', true) 
        })
    }
}
</script>

<style lang="scss">
.blocobmenu{
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFF url(../assets/images/shared/bg_menu.svg) no-repeat;
    background-position: bottom left;
    background-size: 113%;

    .closebutton{
        top: calc( 50vh - 42px);
        left: 85vw;

        svg {
            width: 85px;
            height: 85px;
        }
    }

    .space {
        height: 100vh;
    }

    &:before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: calc( 85vw + 42px );
        height: 100vh;
        width: 1px;
        background: #D5D5D5;
        z-index: 0;
    }

    .containerReduced{
        height: 100vh;
        position: relative;
    }

    .blocoBSelectCategory {
        position: relative;
        z-index: 1;
        padding-left: 0;
        height: 100vh;
        display: grid;
        align-items: center;

        .simulatorLink{
            font-family: 'Oswald', sans-serif;
            font-size: 1.1rem;
            font-weight: 300;
            text-transform: uppercase;
            color: #C47C5A;

            &:hover{
                text-decoration: underline;
            }
        }
        
        .categoryMenu,
        .collectionMenu {
            list-style: none;
            padding: 0;
        }

        .categoryMenu{

            & > li {
                position: relative;

                & > a{
                    position: relative;
                    display: table;
                    font-family: 'Oswald', sans-serif;
                    font-size: 4.75rem;
                    font-weight: 500;
                    color: #333;
                    line-height: 5rem;
                    text-transform: uppercase;
                    margin: 20px 0 30px;
                    -webkit-transition:  margin 0.3s ease;
                    -moz-transition:     margin 0.3s ease;
                    -o-transition:       margin 0.3s ease;
                    transition:          margin 0.3s ease;

                    &::before{
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: -30%;
                        content: '';
                        width: 0;
                        height: 7px;
                        background-color: #333;
                        -webkit-transition:     width 0.4s ease, 0.1s left 0.3s ease;
                        -moz-transition:        width 0.4s ease, 0.1s left 0.3s ease;
                        -o-transition:          width 0.4s ease, 0.1s left 0.3s ease;
                        transition:             width 0.4s ease, 0.1s left 0.3s ease;
                    }
                }

                &:hover,
                &.active{
                    & > a { 
                        margin: 10px 0 130px;

                        &:before{ left: -20px; width: 115%;}
                    }

                    .collectionMenu{ height:100%; opacity: 1; }
                     
                }
            }
        }

        .collectionMenu{ 
            position: absolute;
            left: 5px;
            top: 100px;
            overflow: hidden;
            height:0;
            opacity: 0;
            -webkit-transition:     height 0.5s ease, opacity 0.5s ease;
            -moz-transition:        height 0.5s ease, opacity 0.5s ease;
            -o-transition:          height 0.5s ease, opacity 0.5s ease;
            transition:             height 0.5s ease, opacity 0.5s ease;

            // &.cat-0{top: 360px;}
            // &.cat-1{top: 460px;}
            // &.cat-2{top: 560px;}

            & > li {
                a{
                    display: block;
                    position: relative;
                    font-family: 'Oswald', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 2px;
                    color: #333;
                    line-height: 1.5rem;
                    text-transform: uppercase;
                    margin: 10px 0;
                }

                &.active a,
                & > a:hover{
                    color: #C47C5A;

                    &:before{
                        background-color: #C47C5A;
                        width: 43px;
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .blocobmenu {

        &:before { left: calc( 65vw + 42px ); }

        .closebutton {
            top: 80vh;
            left: 65vw;
            z-index: 3;
        }   

        .blocoBSelectCategory {
            padding: 30px 100px 30px 50px;

            .categoryMenu{
                & > li{
                    & > a { 
                        font-size: 3rem;
                        margin: 10px 0 100px;

                        &:before{ left: -20px; width: 115%;}
                    }

                    .collectionMenu{ top: 80px; height:100%; opacity: 1; }
                }
            }
        }
    }
}
</style>