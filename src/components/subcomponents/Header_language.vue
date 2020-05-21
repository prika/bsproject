<template>
    <div class="languageLinks d-flex ml-auto"> 
        <a href="#" class="active">Portugal</a>
        <a href="#">English</a>
    </div>
</template>

<script>
    export default {
        
    }
</script>


<style lang="scss">
.languageLinks{
    border-left: 1px solid #E8E8E8;
    padding: 0 22px;
    font-size: 13px;
    //display: block;
    max-width: 170px;
    align-items: center;
    justify-content: center;

    & a {
        //font-family: $font-family-sans-serif;
        // font-weight: normal;
        //color: $secondary-menu-link-color;
        //text-decoration: $secondary-menu-link-decoration;
        text-transform: uppercase;

        &:hover, &.active {
            //color: #B7B7B7;
        }
    }
}
</style>